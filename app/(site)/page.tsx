import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <Image 
                src='/images/logo.png'
                height="48"
                width="48"
                alt='Logo'
                className='mx-auto w-auto'
            />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                Sign in to your Account
            </h2>
        </div>
        {/* Auth form goes here */}
    </main>
  )
}
