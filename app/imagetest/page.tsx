import Image from 'next/image';
export default function HomePage() {
    return (

<div className="flex justify-center">
<Image
  src="/images/20211009_105439.jpg"
  alt="A beautiful image"
  width={800}
  height={600}
/>
</div>
  );
}