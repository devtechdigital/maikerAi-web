import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "./button";
import { Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";

interface ImageUploadProps {
  onUploadComplete?: (imageUrl: string) => void;
  className?: string;
}

export function ImageUpload({ onUploadComplete, className = "" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const generateUploadUrl = useMutation(api.images.generateUploadUrl);
  const saveImage = useMutation(api.images.saveImage);
  const { isSignedIn } = useAuth();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!isSignedIn) {
        toast.error("Please sign in to upload images");
        return;
      }

      if (acceptedFiles.length === 0) return;

      try {
        setIsUploading(true);
        const file = acceptedFiles[0]; // Handle one file at a time

        // Check file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
          toast.error("File size must be less than 10MB");
          return;
        }
        
        // Get the upload URL
        const uploadUrl = await generateUploadUrl();
        
        // Upload the file
        const result = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });
        
        if (!result.ok) {
          throw new Error(`Upload failed: ${result.statusText}`);
        }
        
        // Get the storageId from the response
        const { storageId } = await result.json();
        
        // Save the image metadata
        const savedImage = await saveImage({
          storageId,
          name: file.name,
          type: file.type,
          size: file.size,
          description: "Uploaded via style guide",
        });

        toast.success("Image uploaded successfully!");
        
        if (onUploadComplete && savedImage) {
          onUploadComplete(storageId);
        }
      } catch (error) {
        console.error("Upload failed:", error);
        toast.error(error instanceof Error ? error.message : "Failed to upload image");
      } finally {
        setIsUploading(false);
      }
    },
    [generateUploadUrl, saveImage, onUploadComplete, isSignedIn]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
    },
    maxFiles: 1,
    disabled: !isSignedIn || isUploading,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors ${
        isDragActive ? "border-primary bg-primary/5" : "border-gray-300"
      } ${!isSignedIn ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-2">
        <Upload className="h-8 w-8 text-gray-500" />
        {!isSignedIn ? (
          <p>Please sign in to upload images</p>
        ) : isUploading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Uploading...</span>
          </div>
        ) : isDragActive ? (
          <p>Drop the image here</p>
        ) : (
          <>
            <p>Drag & drop an image here, or click to select</p>
            <p className="text-sm text-gray-500">Supports PNG, JPG, GIF up to 10MB</p>
          </>
        )}
      </div>
    </div>
  );
} 