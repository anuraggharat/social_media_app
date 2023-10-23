import AuthForm from './components/AuthForm'

export default function Home() {
  return (
    <main className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-950">
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className='mt-6 text-center text-3xl font-medium tracking-tight text-gray-900 dark:text-white'>
                Sign in to your Account
            </h2>
        </div>
        <AuthForm />
    </main>
  )
}
