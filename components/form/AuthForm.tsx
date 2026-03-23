'use client'

import { registerFunction, signInFunction } from "@/lib/actions/auth";
import { useActionState, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'sonner'
import { useRouter } from "next/navigation";

interface inputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    required?: boolean
}


const ImagePanel = () => (
    <div className="relative w-full h-full min-h-[600px]">
        <img
            src="/authimg.avif"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div
            className="absolute inset-0"
            style={{
                background: "linear-gradient(135deg, rgba(2,8,23,0.4) 0%, rgba(99,102,241,0.15) 100%)",
            }}
        />
    </div>
);

const GlassInput = ({ label, type, name, placeholder, required }: inputProps) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
    >
        <label className="block text-xs font-semibold tracking-wide text-white/50 uppercase mb-1.5 text-left">
            {label}
        </label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/20 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40"
            style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 12px rgba(0,0,0,0.2)",
            }}
        />
    </motion.div>
);


const AuthForm = () => {

    const [isRegister, setIsRegister] = useState(false);

    const [registerState, registerFormAction, registerIsPending] = useActionState(registerFunction, null)

    useEffect(() => {
        if (registerState?.message) {
            if (registerState.error || !registerState.success) {
                toast.error(registerState.message)
            } else {
                toast.success(registerState.message)
            }
        }
    }, [registerState])

    const [signInState, signInFormAction, signInIsPending] = useActionState(signInFunction, null)


    useEffect(() => {
        if (signInState?.message) {
            if (signInState.success === false || signInState.error) {
                toast.error(signInState.message)
            } else {
                toast.success(signInState.message)
            }
        }
    }, [signInState])


    const formPanel = (
        <div className="flex flex-col justify-center h-full p-8 lg:p-10">

            <motion.div
                key={isRegister ? "reg-header" : "sign-header"}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
            >
                <h1 className="text-2xl font-bold text-white mb-1">
                    {isRegister ? 'Buat Akun Baru' : 'Selamat Datang Kembali'}
                </h1>
                <p className="text-white/40 text-sm">
                    {isRegister ? 'Silakan daftar untuk mulai memantau crypto' : 'Masukkan detail akunmu untuk lanjut'}
                </p>
            </motion.div>

            <form
                className="space-y-4"
                action={isRegister ? registerFormAction : signInFormAction}
            >
                <AnimatePresence mode="popLayout">
                    {isRegister && (
                        <>
                            <GlassInput key="name" label="Nama Lengkap" type="text" name="name" placeholder="John Doe" required />
                            {isRegister && registerState?.error?.name && (
                                <p className="text-[10px] text-red-400 ml-1 mt-1 font-medium">
                                    {registerState.error.name}
                                </p>
                            )}
                        </>
                    )}
                </AnimatePresence>

                <GlassInput label="Email" type="email" name="email" placeholder="name@example.com" required />
                {(isRegister ? registerState?.error?.email : signInState?.error?.email) && (
                    <p className="text-[10px] text-red-400 ml-1 mt-1 font-medium">
                        {isRegister ? registerState?.error?.email : signInState?.error?.email}
                    </p>
                )}

                <GlassInput label="Password" type="password" name="password" placeholder="••••••••" required />
                {(isRegister ? registerState?.error?.password : signInState?.error?.password) && (
                    <p className="text-[10px] text-red-400 ml-1 mt-1 font-medium">
                        {isRegister ? registerState?.error?.password : signInState?.error?.password}
                    </p>
                )}



                <AnimatePresence mode="popLayout">
                    {isRegister && (
                        <>
                            <GlassInput key="cpass" label="Konfirmasi Password" type="password" name="cpassword" placeholder="••••••••" required />
                            {isRegister && registerState?.error?.cpassword && (
                                <p className="text-[10px] text-red-400 ml-1 mt-1 font-medium">
                                    {registerState.error.cpassword}
                                </p>
                            )}
                        </>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={signInIsPending || registerIsPending}
                    className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 mt-2 disabled:opacity-50 cursor-pointer"
                    style={{
                        background: "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(99,102,241,0.7))",
                        boxShadow: "0 4px 24px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                    }}
                >
                    {isRegister
                        ? (registerIsPending ? 'Mendaftarkan...' : 'Daftar Sekarang')
                        : (signInIsPending ? 'Memproses...' : 'Masuk')
                    }
                </motion.button>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
                </div>
                {/* <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-3 text-white/30" style={{ background: "transparent" }}>
                        Atau lanjut dengan
                    </span>
                </div> */}
            </div>

            {/* <div className="flex gap-3">
                {["Google", "GitHub"].map((provider) => (
                    <motion.button
                        key={provider}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(8px)",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
                        }}
                    >
                        {provider === "Google" ? (
                            <FcGoogle size={20} />
                        ) : (
                            <Github size={20} />
                        )}
                        <span>{provider}</span>
                    </motion.button>
                ))}
            </div> */}

            <div className="text-center mt-8">
                <p className="text-sm text-white/40">
                    {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsRegister(!isRegister)}
                        className="ml-1 font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
                    >
                        {isRegister ? 'Login di sini' : 'Daftar di sini'}
                    </motion.button>
                </p>
            </div>
        </div>
    );

    return (
        <div
            className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">

            <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full max-w-4xl rounded-3xl overflow-hidden card"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isRegister ? "register-layout" : "signin-layout"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='grid grid-cols-1 lg:grid-cols-2 min-h-[600px]'
                    >
                        {isRegister ? (
                            <>
                                <div className="hidden lg:block relative overflow-hidden"
                                    style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                                    <ImagePanel />
                                </div>
                                <div>{formPanel}</div>
                            </>
                        ) : (
                            <>
                                <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                                    {formPanel}
                                </div>
                                <div className="hidden lg:block relative overflow-hidden">
                                    <ImagePanel />
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default AuthForm;