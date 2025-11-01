import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  CheckCircle2,
  Award,
  Truck,
  Headphones,
  Shield,
  Star,
} from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products, testimonials } from "../data/products";
import { ImageWithFallback } from "./fallbacks/ImageWithFallback";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1656466444029-472b105b1c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MjAxNjA1NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Steel Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">
              Leading Steel Solutions for Industry
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Premium steel trading and manufacturing with 20+ years of
              expertise. Delivering quality materials and exceptional service
              worldwide.
            </p>
            <Button
              onClick={() => onNavigate("products")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-slate-900">
              About SteelPro
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              SteelPro has been at the forefront of steel trading and
              manufacturing since 2005. We specialize in providing high-quality
              steel products to industries worldwide, backed by rigorous quality
              control and exceptional customer service.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 text-left">
              <h3 className="text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-700">
                To deliver superior steel products and solutions that empower
                our clients to build a stronger future, while maintaining the
                highest standards of quality, safety, and environmental
                responsibility.
              </p>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h4 className="text-slate-900 mb-1">ISO 9001</h4>
                <p className="text-sm text-slate-600">Certified</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h4 className="text-slate-900 mb-1">ASTM</h4>
                <p className="text-sm text-slate-600">Compliant</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h4 className="text-slate-900 mb-1">20+ Years</h4>
                <p className="text-sm text-slate-600">Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h4 className="text-slate-900 mb-1">500+</h4>
                <p className="text-sm text-slate-600">Happy Clients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-slate-900">
              Featured Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our premium selection of steel products, manufactured to
              meet the highest industry standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onLearnMore={() => onNavigate("products")}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate("products")}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-slate-900">
              Why Choose SteelPro?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're committed to delivering excellence in every aspect of our
              service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="text-slate-900 mb-2">Premium Quality</h3>
                <p className="text-slate-600">
                  All products meet international standards with rigorous
                  quality control
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="p-6">
                <Truck className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="text-slate-900 mb-2">Fast Delivery</h3>
                <p className="text-slate-600">
                  Efficient logistics network ensuring on-time delivery
                  worldwide
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="p-6">
                <Award className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="text-slate-900 mb-2">Certified Materials</h3>
                <p className="text-slate-600">
                  Complete documentation and certification for all materials
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="p-6">
                <Headphones className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="text-slate-900 mb-2">Technical Support</h3>
                <p className="text-slate-600">
                  Expert engineering support for material selection and
                  specifications
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl text-center mb-10 text-slate-900">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-slate-50">
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
