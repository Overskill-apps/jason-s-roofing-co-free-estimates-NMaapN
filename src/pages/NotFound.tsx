import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="w-20 h-20 hero-gradient rounded-full flex items-center justify-center mx-auto">
          <Shield className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
        
        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Need help? Call us at <span className="font-semibold">(555) 123-ROOF</span>
          </p>
        </div>
      </div>
    </div>
  );
}