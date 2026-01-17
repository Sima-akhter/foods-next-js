const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
      {/* Image Skeleton */}
      <div className="h-52 bg-slate-200 animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-32 bg-slate-200 animate-pulse rounded-md" />
          <div className="h-6 w-12 bg-slate-200 animate-pulse rounded-md" />
        </div>
        
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 animate-pulse rounded-md" />
          <div className="h-4 w-2/3 bg-slate-200 animate-pulse rounded-md" />
        </div>

        {/* Button Skeletons */}
        <div className="flex gap-3 pt-2">
          <div className="h-10 flex-1 bg-slate-200 animate-pulse rounded-xl" />
          <div className="h-10 flex-1 bg-slate-200 animate-pulse rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;