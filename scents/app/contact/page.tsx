"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Page() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
     const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyxaE36KeJ01gOQkWhZ5sKkhl5FOAaItawjf8VFsRY0rKu3wae8iGdQgFUfI1o0Pg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );
      if (!response.ok) throw new Error("Request failed");

      toast({
        title: "Message sent ✨",
        description: "Thanks for reaching out! We’ll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-[#fbf9ff] via-white to-[#f3efff]" />
        <div className="absolute top-24 left-20 w-md h-md bg-violet-300/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-20 w-[24rem] h-96 bg-purple-200/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium shadow-sm">
            Contact Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-purple-900 tracking-wide mb-6">
            Let’s Get You Something Beautiful
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-base">
            Whether you have a question, need assistance, or want to
            collaborate, we’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 bg-white/75 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-md border border-white/60">
            <h3 className="font-serif text-2xl text-purple-900 mb-8">
              Send Us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="rounded-xl focus-visible:ring-purple-500"
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-xl focus-visible:ring-purple-500"
              />
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="md:col-span-2 rounded-xl focus-visible:ring-purple-500"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="md:col-span-2 rounded-xl focus-visible:ring-purple-500"
              />

              <div className="md:col-span-2 flex flex-col items-end pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="group rounded-none px-10 py-6 bg-linear-to-r from-purple-900 to-violet-700 hover:from-purple-800 hover:to-violet-600 text-white flex items-center gap-3 shadow-lg transition-all"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                title: "Email Us",
                value: "jarnasscents@gmail.com",
              },
              { icon: Phone, title: "Call Us", value: "+254725477482" },
              { icon: MapPin, title: "Location", value: "Nairobi, Kenya" },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 rounded-2xl p-6 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-lg transition-all border border-white/60"
              >
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-700 to-violet-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-purple-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
