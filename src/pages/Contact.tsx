import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';

import Footer from '@/components/Footer';

const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z.string().optional(),
  service: z.string().min(1, {
    message: 'Please select a service.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      element.classList.add("animate-fade-in-down");
    });
  }, []);



  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    console.log(values);
    try {
      // Here you would typically send the form data to your backend
      // using a fetch or axios call.
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });
      // For now, we just log the values to the console and simulate a delay.
      await new Promise((resolve) => setTimeout(resolve, 2000));
      form.reset();
    } catch (error) {
      console.error('Error sending form data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 md:px-6 fade-in">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-brand-900 mb-8 transition-colors duration-300 hover:text-brand-800">Contact Us</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem className="transition-all duration-300 hover:shadow-md rounded-lg p-2">
                      <FormLabel className="text-gray-800 font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="border-gray-300 focus:border-brand-900 focus:ring-brand-900 transition-colors duration-300" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="transition-all duration-300 hover:shadow-md rounded-lg p-2">
                      <FormLabel className="text-gray-800 font-medium">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe@example.com" {...field} className="border-gray-300 focus:border-brand-900 focus:ring-brand-900 transition-colors duration-300" />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="transition-all duration-300 hover:shadow-md rounded-lg p-2">
                      <FormLabel className="text-gray-800 font-medium">Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+1-123-456-7890" {...field} className="border-gray-300 focus:border-brand-900 focus:ring-brand-900 transition-colors duration-300" />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem className="transition-all duration-300 hover:shadow-md rounded-lg p-2">
                      <FormLabel className="text-gray-800 font-medium">Services Interested In</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} className="border-gray-300 focus:border-brand-900 focus:ring-brand-900 transition-colors duration-300">
                      <FormControl>
                        <SelectTrigger className="border-gray-300 focus:border-brand-900 focus:ring-brand-900 transition-colors duration-300">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='border-gray-300 focus:border-brand-900 focus:ring-brand-900 transition-colors duration-300'>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="app-development">App Development</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="crm">CRM</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="transition-all duration-300 hover:shadow-md rounded-lg p-2">
                    <FormLabel className="text-gray-800 font-medium">Message</FormLabel>
                      <FormControl >
                        <Textarea placeholder="Enter your message here." {...field} className="border-gray-300 focus:border-brand-900 focus:ring-brand-900 transition-colors duration-300" />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="bg-brand-900 hover:bg-brand-800 text-white transition-colors duration-300">
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;