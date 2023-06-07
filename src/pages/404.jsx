import Image from 'next/image';

export default function Page() {
  return (
    <Image
      src='/images/404.png'
      width={1300}
      height={500}
      alt='Error Page 404'
    />
  );
}
