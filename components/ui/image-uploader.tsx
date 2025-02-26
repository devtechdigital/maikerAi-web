'use client';

import { useCallback, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { toast } from 'sonner';
import { Loader2, Upload } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface ImageUploaderProps {
  onUploadComplete?: (imageUrl: string) => void;
  className?: string;
}

export function ImageUploader({ onUploadComplete, className = '' }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { isSignedIn } = useAuth();
  
  const generateUploadUrl = useMutation(api.images.generateUploadUrl);
  const saveImage = useMutation(api.images.saveImage);

  const handleUpload = useCallback(async (files: FileList | null) => {
    if (!isSignedIn) {
      toast.error('Please sign in to upload images');
      return;
    }

    if (!files || files.length === 0) return;

    try {
      setIsUploading(true);
      const file = files[0];

      // Validate file
      if (!file.type.startsWith('image/')) {
        throw new Error('File must be an image');
      }

      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        throw new Error('File size must be less than 10MB');
      }

      // Get upload URL from Convex
      const uploadUrl = await generateUploadUrl();

      // Upload to Convex storage
      const result = await fetch(uploadUrl, {
        method: 'POST',
        headers: { 'Content-Type': file.type },
        body: file,
      });

      if (!result.ok) {
        throw new Error('Failed to upload image');
      }

      const { storageId } = await result.json();

      // Save image metadata
      const savedImage = await saveImage({
        storageId,
        name: file.name,
        type: file.type,
        size: file.size,
        description: 'Uploaded via style guide',
      });

      toast.success('Image uploaded successfully!');
      
      if (onUploadComplete && savedImage) {
        onUploadComplete(storageId);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  }, [isSignedIn, generateUploadUrl, saveImage, onUploadComplete]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleUpload(e.dataTransfer.files);
  }, [handleUpload]);

  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        isDragging ? 'border-primary bg-primary/5' : 'border-gray-300'
      } ${!isSignedIn ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => {
        if (!isSignedIn || isUploading) return;
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => handleUpload((e.target as HTMLInputElement).files);
        input.click();
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <Upload className="h-8 w-8 text-gray-500" />
        {!isSignedIn ? (
          <p>Please sign in to upload images</p>
        ) : isUploading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Uploading...</span>
          </div>
        ) : isDragging ? (
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