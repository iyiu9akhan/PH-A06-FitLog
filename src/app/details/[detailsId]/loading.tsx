export default function DetailsLoading() {
  return (
    <div className="min-h-[calc(100vh-101px)] w-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-[#2D313B] border-t-brand rounded-full animate-spin" />
      <p className="font-secondary text-[14px] text-subTitle">
        Loading workout details...
      </p>
    </div>
  );
}