import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [icons, setIcons] = useState(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="fixed left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div
            className={`fixed left-10 ${icons ? 'hidden' : 'show'}`}
            style={{background: 'blue'}}
            >
            Link to Stuff
          </div>
            <div
              className="flex justify-center items-center"
              onClick={() => setIcons(!icons)}
              >
              <Image
                src="/horse.jpg"
                alt="horse"
                className={`flex justify-center items-center`}
                width={100}
                height={24}
                priority
              />
            </div>
            <div
            className={`fixed right-10 ${icons ? 'hidden' : 'show'}`}
            style={{background: 'blue'}}
            >
            Link to Stuff
          </div>
          <div
            className={`fixed top-20 ${icons ? 'hidden' : 'show'}`}
            style={{background: 'blue'}}
            >
            Link to Stuff
          </div>
        </div>
      </div>
    </main>
  )
}
