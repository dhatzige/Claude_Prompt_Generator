
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  defaultTab?: "login" | "register";
}

declare global {
  interface Window {
    authModal: HTMLDialogElement;
  }
}

const AuthModal: React.FC<AuthModalProps> = ({ defaultTab = "login" }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState<"student" | "employer" | "university">("student");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual authentication logic
    toast({
      title: "Login Attempted",
      description: "This is a demo. Authentication would happen here.",
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual registration logic
    toast({
      title: "Registration Attempted",
      description: `This is a demo. Registration as ${userType} would happen here.`,
    });
  };

  return (
    <Dialog>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            {activeTab === "login" ? "Welcome Back" : "Join TalentBridge.gr"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {activeTab === "login" 
              ? "Sign in to access your account" 
              : "Create an account to get started"}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-brand-blue hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Full Name</Label>
                <Input 
                  id="register-name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input 
                  id="register-email" 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input 
                  id="register-password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label>I am a...</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    type="button"
                    variant={userType === "student" ? "default" : "outline"}
                    className={`${
                      userType === "student" ? "border-brand-blue" : ""
                    } flex-1`}
                    onClick={() => setUserType("student")}
                  >
                    Student/Graduate
                  </Button>
                  <Button
                    type="button"
                    variant={userType === "employer" ? "default" : "outline"}
                    className={`${
                      userType === "employer" ? "border-brand-blue" : ""
                    } flex-1`}
                    onClick={() => setUserType("employer")}
                  >
                    Employer
                  </Button>
                  <Button
                    type="button"
                    variant={userType === "university" ? "default" : "outline"}
                    className={`${
                      userType === "university" ? "border-brand-blue" : ""
                    } flex-1`}
                    onClick={() => setUserType("university")}
                  >
                    University
                  </Button>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mt-4">
                By creating an account, you agree to our{" "}
                <a href="/terms" className="text-brand-blue hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-brand-blue hover:underline">
                  Privacy Policy
                </a>
                .
              </div>
              
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
