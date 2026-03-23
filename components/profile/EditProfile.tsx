'use client'

import React, { useActionState, useRef, useState, useTransition } from 'react';
import { Pencil, Camera, Trash, Loader2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PutBlobResult } from '@vercel/blob';
import { editProfile } from '@/lib/actions/profile';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface ProfileData {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
}

const EditProfile = ({ data }: { data: ProfileData }) => {
    const inputFileRef = useRef<HTMLInputElement>(null);

    const [image, setImage] = useState(data.image || "");
    const [message, setMessage] = useState('');
    const [pending, setTransition] = useTransition();
    const [open, setOpen] = useState(false)

    const handleUpload = () => {
        if (!inputFileRef.current?.files) return;

        const file = inputFileRef.current.files[0];
        const formData = new FormData();
        formData.set('file', file);

        setTransition(async () => {
            try {
                const response = await fetch('/api/upload', {
                    method: 'PUT',
                    body: formData
                });

                const resData = await response.json();

                if (response.status !== 200) {
                    toast.error(resData.message || "Gagal upload gambar");
                    return;
                }

                const img = resData as PutBlobResult;
                setImage(img.url);
                toast.success("Gambar berhasil diunggah");
            } catch (error) {
                toast.error("Terjadi kesalahan saat upload");
            }
        });
    }

    const deleteImage = (imgUrl: string) => {
        setTransition(async () => {
            try {
                await fetch(`/api/upload/?imgUrl=${imgUrl}`, {
                    method: 'DELETE'
                });
                setImage('');
            } catch (error) {
                console.log(error);
            }
        });
    }

    const [state, formAction, isPending] = useActionState(
        editProfile.bind(null, data.id, image),
        null
    );

    useEffect(() => {
        if (state?.message) {
            if (state.success) {
                toast.success(state.message);
                setOpen(false); 
            } else {
                toast.error(state.message);
            }
        }
    }, [state]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild >
                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition cursor-pointer group z-10">
                    <Pencil size={16} className="group-hover:scale-110 transition-transform" />
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] bg-[#030f1f] backdrop-blur-xl border-gray-600 text-white shadow-2xl">
                <form action={formAction}>
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold tracking-tight">Edit Profile</DialogTitle>
                        <p className="text-sm text-white/40 italic">Update identitas Nirmala Finance kamu.</p>
                    </DialogHeader>

                    <div className="grid gap-6 py-6">

                        <div className="flex flex-col items-center gap-4">
                            <div className="relative w-24 h-24 group">
                                {pending ? (
                                    <div className="w-full h-full rounded-full border-2 border-dashed border-blue-500/50 bg-blue-500/10 flex items-center justify-center">
                                        <Loader2 className="animate-spin text-blue-500" size={24} />
                                    </div>
                                ) : !image ? (
                                    <label className="w-full h-full rounded-full border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                                        <Camera size={20} className="text-white/40" />
                                        <input type="file" onChange={handleUpload} ref={inputFileRef} className="hidden" accept="image/*" />
                                    </label>
                                ) : (
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg group">
                                        <img src={image} alt="preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button
                                                type="button"
                                                onClick={() => deleteImage(image)}
                                                className="bg-white p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-all transform scale-90 group-hover:scale-100"
                                            >
                                                <Trash size={16} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Foto Profil</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label className="text-xs font-semibold text-white/60">Nama Lengkap</Label>
                                <Input
                                    name="name"
                                    defaultValue={data.name || ""}
                                    className="bg-white/5 border-white/10 focus:border-blue-500/50 text-white"
                                />
                                {state?.error?.name && (
                                    <p className='text-xs mt-1 text-red-600'>{state.error.name}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label className="text-xs font-semibold text-white/60">Bio</Label>
                                <Textarea
                                    name="bio"
                                    defaultValue={data.bio || ""}
                                    className="bg-white/5 border-white/10 focus:border-blue-500/50 text-white min-h-[80px] resize-none"
                                />
                                {state?.error?.bio && (
                                    <p className='text-xs mt-1 text-red-600'>{state.error.bio}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {message && <p className="text-red-400 text-sm mb-4">⚠️ {message}</p>}

                    <DialogFooter>
                        <button
                            type="submit"
                            disabled={isPending || pending}
                            className="w-full py-2.5 rounded-xl text-sm font-bold text-white btn-color btn-color:hover disabled:opacity-50 transition-all shadow-lg shadow-blue-500/20"
                        >
                            {isPending ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditProfile;