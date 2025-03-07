"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { fetchTemplates } from "@/lib/data";

// types
export interface Template {
  id: string;
  title: string;
  description: string;
  categories: string[];
  blockchainCompatibility: string[];
  author: string;
  downloads: number;
  imageUrl?: string;
}

interface TemplateCardProps {
  template: Template;
}

function TemplateList({ template }: TemplateCardProps) {
  const formatDownloads = (count: number): string => {
    if (count < 1000) return count.toString();
    const thousands = count / 1000;
    return thousands === Math.floor(thousands) ? `${thousands}k` : `${thousands.toFixed(1)}k`;
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-50" tabIndex={0}>
      <div className="relative">
        <div className="aspect-[16/9] bg-gray-100">
          {template.imageUrl ? (
            <img src="/templates.webp" alt={`${template.title} preview`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">No preview available</div>
          )}
        </div>
        <button aria-label={`View ${template.title} details`} className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary">
          <ArrowUpRight className="h-4 w-4 text-[#0A0A0A]" />
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#0A0A0A] mb-2">{template.title}</h2>
        <p className="text-[#4B5563] text-sm mb-4 line-clamp-2">{template.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {template.blockchainCompatibility.map((blockchain) => (
            <div key={blockchain} className="bg-[#1717171A]/10 text-[#171717] rounded-lg text-sm px-1">
              {blockchain}
            </div>
          ))}
          {template.categories.map((category) => (
            <div key={category} className="bg-[#F3F4F6] text-[#4B5563] rounded-lg text-sm px-1">
              {category}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-[#4B5563] pt-3">
          <span>by {template.author}</span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {formatDownloads(template.downloads)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TemplateGrid() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 15; 

  useEffect(() => {
    loadTemplates();
  }, [page]); 

  const loadTemplates = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newTemplates = await fetchTemplates(page, itemsPerPage);
      setTemplates((prev) => [...prev, ...newTemplates]);
      if (newTemplates.length < itemsPerPage) setHasMore(false);
    } catch (error) {
      console.error("Error loading templates:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {templates.map((template) => (
          <TemplateList key={template.id} template={template} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center my-8">
          <button onClick={() => setPage((prev) => prev + 1)} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-80">
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {loading && (
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}
