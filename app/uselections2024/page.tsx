import Image from 'next/image';
import Link from 'next/link';

export default function USElections2024() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-16">
      <Link href="/" className="absolute top-8 left-8 flex items-center text-lg hover:text-purple-500 transition-colors">
        <span className="mr-2">←</span>
        Home
      </Link>

      <h1 className="mb-2 text-5xl font-bold text-center">US Elections 2024</h1>
      <h2 className="mb-12 text-2xl text-center">Lead Developer for US Elections Hub 2024 for Election Day @ TikTok</h2>

      {/* Apple Front Page Section */}
      <div className="w-full max-w-6xl mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Apple Front Page November 5th Election Day</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-[700px]">
            <Image
              src="/apple-elections1.png"
              alt="Apple Elections Front Page 1"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-[700px]">
            <Image
              src="/apple-elections2.png"
              alt="Apple Elections Front Page 2"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <h2 className="mb-12 text-2xl text-center">Article Links</h2>
      {/* First Row of Article Links */}
      <div className="w-full max-w-6xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="https://archive.ph/HKHtR" target="_blank">
            <div className="relative w-full h-[300px] transition-transform hover:scale-105">
              <Image src="/elections-article1.png" alt="Elections Article" fill style={{ objectFit: 'cover' }} className="rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <p className="text-lg">New York Times Article</p>
              </div>
            </div>
          </Link>
          <Link href="https://newsroom.tiktok.com/en-us/protecting-election-integrity-in-2024" target="_blank">
            <div className="relative w-full h-[300px] transition-transform hover:scale-105">
              <Image
                src="/tiktok-elections1.png"
                alt="TikTok Election Integrity"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <p className="text-lg">TikTok Article</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Second Row of Article Links */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="https://www.tiktok.com/transparency/en-us/us-election-hub" target="_blank">
            <div className="relative w-full h-[300px] transition-transform hover:scale-105">
              <Image src="/tiktok-elections2.png" alt="TikTok Election Hub" fill style={{ objectFit: 'cover' }} className="rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <p className="text-lg">TikTok Article #2</p>
              </div>
            </div>
          </Link>
          <Link href="https://www.socialmediatoday.com/news/tiktok-outlines-election-security-measures/726118/" target="_blank">
            <div className="relative w-full h-[300px] transition-transform hover:scale-105">
              <Image
                src="/social-media-today.png"
                alt="Social Media Today Article"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <p className="text-lg">Social Media Today Article</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
