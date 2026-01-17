export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Skeleton */}
        <div className="h-[400px] md:h-[500px] bg-slate-200 rounded-3xl" />

        {/* Info Skeleton */}
        <div className="space-y-6">
          <div className="h-4 w-32 bg-slate-200 rounded" />
          <div className="h-12 w-3/4 bg-slate-200 rounded" />
          <div className="h-10 w-24 bg-slate-200 rounded" />
          
          <div className="space-y-3">
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-2/3 bg-slate-200 rounded" />
          </div>

          <div className="pt-6 flex gap-4">
            <div className="h-14 flex-1 bg-slate-200 rounded-2xl" />
            <div className="h-14 flex-1 bg-slate-200 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}