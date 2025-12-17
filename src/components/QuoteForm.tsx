import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  device: z.string().min(1, 'Please select a device type'),
  issue: z.string().min(10, 'Please describe the issue (at least 10 characters)'),
});

type FormData = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      device: '',
      issue: '',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('device', data.device);
      formData.append('issue', data.issue);
      formData.append('_subject', `New Quote Request from ${data.name}`);
      formData.append('_template', 'table');
      
      const response = await fetch('https://formsubmit.co/ajax/masterphonerepair@email.com', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" ref={ref} className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-[#DC2626]/10 text-[#DC2626] rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Free Quote
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-4">
            Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your device and we'll get back to you with a quote within minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card-light rounded-3xl p-8 md:p-12 shadow-2xl">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <div className="inline-flex p-6 bg-green-100 rounded-full mb-6">
                  <CheckCircle2 className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-[#0F172A] mb-4">
                  Quote Request Received!
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  We'll contact you shortly with your personalized quote.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-[#1E88E5] to-[#42A5F5] hover:from-[#1565C0] hover:to-[#1E88E5] text-white px-8 py-6 text-lg font-bold uppercase tracking-wide rounded-xl"
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0F172A] font-semibold">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="h-12 bg-white border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0F172A] font-semibold">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(123) 456-7890"
                              {...field}
                              className="h-12 bg-white border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0F172A] font-semibold">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            className="h-12 bg-white border-2 border-gray-200 focus:border-blue-500 transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="device"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0F172A] font-semibold">
                          Device Type
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-white border-2 border-gray-200 focus:border-blue-500">
                              <SelectValue placeholder="Select your device" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="iphone">iPhone</SelectItem>
                            <SelectItem value="samsung">Samsung Galaxy</SelectItem>
                            <SelectItem value="google">Google Pixel</SelectItem>
                            <SelectItem value="lg">LG</SelectItem>
                            <SelectItem value="motorola">Motorola</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="issue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0F172A] font-semibold">
                          Describe the Issue
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what's wrong with your device..."
                            className="min-h-[120px] bg-white border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#1E88E5] to-[#42A5F5] hover:from-[#1565C0] hover:to-[#1E88E5] text-white py-6 text-lg font-bold uppercase tracking-wide rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Smartphone className="w-5 h-5 mr-2" />
                        Get My Free Quote
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
