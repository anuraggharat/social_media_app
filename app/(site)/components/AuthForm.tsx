'use client'
import axios from 'axios'
import Button from "../../components/common/Button";
import Input from "../../components/input/Input";
import { useCallback, useEffect, useState } from "react"
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle , BsChatLeftQuote } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Variant = 'LOGIN' | 'REGISTER';

export default function AuthForm() {

    const session = useSession()
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading,setIsLoading] = useState(false)
    const router = useRouter()

    const toggleVariant = useCallback(()=>{
        if (variant==='LOGIN') {
            setVariant("REGISTER")
        }else {
            setVariant("LOGIN")
        }
    },[])

    const {register,handleSubmit,formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === 'LOGIN') {
          signIn('credentials', {
            ...data,
            redirect: false
          })
          .then((callback) => {
            if (callback?.error) {
              toast.error('Invalid credentials!');
            }
            if (callback?.ok) {
              toast.success("Logged in")
              router.push('/users')
            }
          })
          .finally(() => setIsLoading(false))
        }
        if (variant==='REGISTER') {
          axios.post('/api/register',data)
          .then(()=>toast.success("Account created"))
          .then(()=>signIn('credentials',data))
          .catch(()=>toast.error("Something went wrong!"))
          .finally(()=>setIsLoading(false))
        }
    }

    const socialAction = (action:string)=>{
        setIsLoading(true)
        signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid credentials!');
        }

        if (callback?.ok) {
          toast.success("Logging In")
          //router.push('/conversations')
        }
      })
      .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
      if (session?.status === 'authenticated') {
        router.push('/users')
      }
    },[session?.status,router])

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md rounded">
        <div className=" px-4 py-8 shadow sm:rounded-lg sm:px-10 bg-white border 
        border-gray-200 dark:bg-neutral-900 dark:border-neutral-900">
        <form 
          className="space-y-6" 
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' && (
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="name" 
              label="Name"
            />
          )}
          <Input 
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email" 
            label="Email address" 
            type="email"
          />
          <Input 
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="password" 
            label="Password" 
            type="password"
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div 
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-neutral-700 dark:text-neutral-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton 
              icon={BsGithub} 
              onClick={() => socialAction('github')} 
            />
            <AuthSocialButton 
              icon={BsGoogle} 
              onClick={() => socialAction('google')} 
            />
          </div>
        </div>
        <div 
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-700
            dark:text-gray-400
          "
        >
          <div>
            {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'} 
          </div>
          <div 
            onClick={toggleVariant} 
            className="underline cursor-pointer text-violet-600"
          >
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>

        </div>
    </div>
  )
}
