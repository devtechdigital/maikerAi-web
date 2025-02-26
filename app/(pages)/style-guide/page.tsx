"use client";

import { useEffect, useState } from "react";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BadgeDollarSign, Image as ImageIcon, Lightbulb, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { ImageUploader } from "@/components/ui/image-uploader";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { Id } from "@/convex/_generated/dataModel";
import { useAuth } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ImageData {
  _id: Id<"images">;
  _creationTime: number;
  storageId: string;
  name: string;
  type: string;
  size: number;
  description?: string;
  uploadedBy: string;
  uploadedAt: number;
  url?: string;
}

export default function StyleGuidePage() {
  const [mounted, setMounted] = useState(false);
  const { isLoaded: isAuthLoaded, isSignedIn } = useAuth();
  const images = useQuery(api.images.listImages);
  const deleteImage = useMutation(api.images.deleteImage);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show loading state during initial mount or auth loading
  if (!mounted || !isAuthLoaded) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </div>
        </div>
      </PageWrapper>
    );
  }

  // Show loading state while images are being fetched
  const isLoading = images === undefined;

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Maiker.Ai Style Guide</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A comprehensive guide to Maiker.Ai's design system and components.
          </p>
        </div>
      </section>

      {/* Font Section */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Typography System</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Font Family</h3>
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">Primary Font</p>
                  <p className={`text-2xl ${GeistSans.className}`}>Geist Sans</p>
                  <p className="text-sm text-gray-500 mt-2">Modern, clean, and highly legible sans-serif font</p>
                  <div className="mt-4 space-y-2">
                    <p className={`${GeistSans.className} font-normal`}>Regular - The quick brown fox jumps over the lazy dog</p>
                    <p className={`${GeistSans.className} font-medium`}>Medium - The quick brown fox jumps over the lazy dog</p>
                    <p className={`${GeistSans.className} font-semibold`}>Semibold - The quick brown fox jumps over the lazy dog</p>
                    <p className={`${GeistSans.className} font-bold`}>Bold - The quick brown fox jumps over the lazy dog</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Font Usage</h3>
              <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Headings</p>
                  <p className="font-bold">Font: Geist Sans Bold</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Body Text</p>
                  <p className="font-normal">Font: Geist Sans Regular</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">UI Elements</p>
                  <p className="font-medium">Font: Geist Sans Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Colors</h2>
          
          <div className="space-y-8">
            {/* Primary Colors */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 w-full bg-green-600 rounded-lg"></div>
                  <p className="text-sm font-medium">Primary Green</p>
                  <p className="text-xs text-gray-500">bg-green-600</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 w-full bg-blue-600 rounded-lg"></div>
                  <p className="text-sm font-medium">Primary Blue</p>
                  <p className="text-xs text-gray-500">bg-blue-600</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 w-full bg-gray-900 rounded-lg"></div>
                  <p className="text-sm font-medium">Dark</p>
                  <p className="text-xs text-gray-500">bg-gray-900</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 w-full bg-white border rounded-lg"></div>
                  <p className="text-sm font-medium">White</p>
                  <p className="text-xs text-gray-500">bg-white</p>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Accent Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 w-full bg-purple-600 rounded-lg"></div>
                  <p className="text-sm font-medium">Purple</p>
                  <p className="text-xs text-gray-500">bg-purple-600</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 w-full bg-orange-600 rounded-lg"></div>
                  <p className="text-sm font-medium">Orange</p>
                  <p className="text-xs text-gray-500">bg-orange-600</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 w-full bg-red-600 rounded-lg"></div>
                  <p className="text-sm font-medium">Red</p>
                  <p className="text-xs text-gray-500">bg-red-600</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Typography</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Headings</h3>
              <div className="space-y-4">
                <div>
                  <h1 className="text-6xl font-bold">Heading 1</h1>
                  <p className="text-sm text-gray-500">text-6xl font-bold</p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold">Heading 2</h2>
                  <p className="text-sm text-gray-500">text-4xl font-bold</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Heading 3</h3>
                  <p className="text-sm text-gray-500">text-2xl font-bold</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Body Text</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg">Large Body Text</p>
                  <p className="text-sm text-gray-500">text-lg</p>
                </div>
                <div>
                  <p>Regular Body Text</p>
                  <p className="text-sm text-gray-500">text-base</p>
                </div>
                <div>
                  <p className="text-sm">Small Text</p>
                  <p className="text-sm text-gray-500">text-sm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradients Section */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Gradients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="h-32 w-full rounded-lg bg-gradient-to-r from-blue-600 to-green-600"></div>
              <p className="text-sm font-medium">Primary Gradient</p>
              <p className="text-xs text-gray-500">bg-gradient-to-r from-blue-600 to-green-600</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 w-full rounded-lg bg-gradient-to-r from-gray-900 via-green-800 to-blue-900 dark:from-white dark:via-green-300 dark:to-blue-300"></div>
              <p className="text-sm font-medium">Text Gradient</p>
              <p className="text-xs text-gray-500">bg-gradient-to-r from-gray-900 via-green-800 to-blue-900</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images & Media Section */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Images & Media</h2>
          
          <div className="space-y-12">
            {/* Image Upload */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Image Upload</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Use the image upload component to allow users to upload images. Supports drag and drop.
                  </p>
                  <ImageUploader className="max-w-md" />
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <p className="text-sm font-medium mb-2">Features:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>Drag and drop support</li>
                      <li>File type validation</li>
                      <li>Size limits (10MB)</li>
                      <li>Upload progress indicator</li>
                      <li>Error handling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Display */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Image Display</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {isLoading ? (
                  <div className="col-span-3 p-8 text-center">
                    <Loader2 className="mx-auto h-8 w-8 animate-spin text-gray-400" />
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Loading images...</p>
                  </div>
                ) : images && images.length > 0 ? (
                  images.map((image) => (
                    image?.url ? (
                      <div key={image._id} className="group relative">
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={image.url}
                            alt={image.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Overlay with image name */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                            <p className="text-white text-sm font-medium text-center break-all">
                              {image.name}
                            </p>
                            <button
                              onClick={async () => {
                                try {
                                  await deleteImage({ imageId: image._id });
                                  toast.success('Image deleted successfully');
                                } catch (error) {
                                  console.error('Failed to delete image:', error);
                                  toast.error('Failed to delete image');
                                }
                              }}
                              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null
                  ))
                ) : (
                  <div className="col-span-3 p-8 text-center border-2 border-dashed rounded-lg">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {!isSignedIn 
                        ? "Please sign in to view and upload images" 
                        : "No images uploaded yet"}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Images are displayed in a responsive grid layout with consistent aspect ratios.
                  Hover over an image to see its name and delete option.
                </p>
              </div>
            </div>

            {/* Image Guidelines */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Image Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <p className="font-medium mb-2">Recommended Formats</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>PNG: For icons, logos, and images with transparency</li>
                      <li>JPEG: For photographs and complex images</li>
                      <li>WebP: For optimal web performance</li>
                      <li>SVG: For scalable icons and illustrations</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <p className="font-medium mb-2">Size Guidelines</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>Hero Images: 1920x1080px</li>
                      <li>Card Images: 800x600px</li>
                      <li>Thumbnails: 400x300px</li>
                      <li>Icons: 24x24px or 32x32px</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <p className="font-medium mb-2">Best Practices</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>Use descriptive file names</li>
                      <li>Optimize images for web</li>
                      <li>Maintain consistent aspect ratios</li>
                      <li>Include alt text for accessibility</li>
                      <li>Consider responsive image sizes</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <p className="font-medium mb-2">Performance Tips</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>Use WebP when possible</li>
                      <li>Implement lazy loading</li>
                      <li>Use appropriate image dimensions</li>
                      <li>Compress without quality loss</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Components</h2>
          
          <div className="space-y-12">
            {/* Buttons */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white rounded-full">
                  Primary Button
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  Secondary Button
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" size="lg" className="rounded-full">
                  Ghost Button
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Badges</h3>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Blue Badge
                </Badge>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Green Badge
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  Purple Badge
                </Badge>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                      <BadgeDollarSign className="h-6 w-6" />
                    </div>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content with more detailed information.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      Card Action
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Feature Sections */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Feature Sections</h3>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Feature Title</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Feature description explaining the benefits and functionality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">Feature point</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-xl flex items-center justify-center">
                  <Rocket className="h-24 w-24 text-green-500 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Icons</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="text-sm">Sparkles</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <BadgeDollarSign className="h-6 w-6" />
              </div>
              <p className="text-sm">BadgeDollarSign</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Lightbulb className="h-6 w-6" />
              </div>
              <p className="text-sm">Lightbulb</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Rocket className="h-6 w-6" />
              </div>
              <p className="text-sm">Rocket</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-sm">ShieldCheck</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <ArrowRight className="h-6 w-6" />
              </div>
              <p className="text-sm">ArrowRight</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
} 