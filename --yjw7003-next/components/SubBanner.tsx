export default function SubBanner({ title }: { title: string }) {
  return (
    <div className="sub-banner">
      <img src="/images/subbanner.jpg" />
      <span>{title}</span>
    </div>
  );
}
