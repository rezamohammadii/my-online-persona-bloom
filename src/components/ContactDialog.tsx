import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${type} has been copied to your clipboard.`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Get In Touch</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Email */}
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-orange" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">sophie.miller@example.com</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard("sophie.miller@example.com", "Email")}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-orange" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">linkedin.com/in/sophiemiller</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard("linkedin.com/in/sophiemiller", "LinkedIn")}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-orange" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+33 1 23 45 67 89</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard("+33 1 23 45 67 89", "Phone number")}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;