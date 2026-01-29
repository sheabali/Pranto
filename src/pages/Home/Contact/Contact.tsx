/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Github, Linkedin, Mail } from "@/components/constant/global"; // these are URLs
import Container from "@/components/Container/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveContact } from "@/utils/actions/contact/saveContact";

import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  website: z.string().url("Invalid URL format").optional(),
  message: z.string().min(6, "Message must be at least 6 characters"),
});

export type FormValues = z.infer<typeof formSchema>;

const socialLinks = [
  {
    icon: Github, // string URL
    alt: "GitHub",
    href: "https://github.com/sheabali",
  },
  {
    icon: Mail,
    alt: "Mail",
    href: "mailto:sheibali62@gmail.com",
  },
  {
    icon: Linkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/sheib-ali-b80655367",
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await saveContact({ ...data, website: data.website || "" });
      if (res) {
        toast.success(res.message);
        reset();
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Container>
      <section className="my-12 border rounded-xl py-12 sm:py-20 px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <Input
                  {...register("name")}
                  placeholder="Your Name"
                  className="py-6 border-2 rounded-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Input
                  {...register("email")}
                  placeholder="Email"
                  className="py-6 border-2 rounded-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Website */}
              <div>
                <Input
                  {...register("website")}
                  placeholder="Your website (optional)"
                  className="py-6 border-2 rounded-none"
                />
                {errors.website && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.website.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register("message")}
                  placeholder="How can I help?"
                  rows={5}
                  className="w-full px-4 py-4 border-2 rounded-none resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit & Socials */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-7 font-bold"
                >
                  Get In Touch
                </Button>

                <div className="flex flex-wrap justify-center gap-3">
                  {socialLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.alt}
                      className="bg-white p-2 border-2 border-gray-800 rounded-sm
                                 hover:scale-105 transition flex items-center justify-center"
                    >
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Let’s talk for <br /> something special
            </h1>

            <p className="text-base mt-6 max-w-md mx-auto lg:mx-0">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>

            <p className="text-xl sm:text-2xl mt-8 font-semibold">
              sheibali62@gmail.com
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
