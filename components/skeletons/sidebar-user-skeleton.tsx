import { Skeleton } from '@/components/ui/skeleton';

export function SidebarUserSkeleton() {
  return (
    <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
      {/* Avatar skeleton */}
      <Skeleton className="h-8 w-8 rounded-lg flex-shrink-0 bg-neutral-300" />

      {/* Text skeleton */}
      <div className="grid flex-1 gap-1.5 text-left">
        <Skeleton className="h-4 w-24 bg-neutral-300" />
        <Skeleton className="h-3 w-32 bg-neutral-300" />
      </div>

      {/* Icon skeleton */}
      <Skeleton className="ml-auto h-6 w-4 bg-neutral-300" />
    </div>
  );
}
