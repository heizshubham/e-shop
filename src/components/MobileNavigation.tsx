import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useTheme } from '@/components/ThemeProvider';
import { Moon, Sun, User, Settings, LogOut, UserCircle } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const { theme, setTheme } = useTheme();

  const navigateAndClose = (path: string) => {
    window.location.href = path;
    onClose();
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          {/* Navigation Links */}
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg" 
            onClick={() => navigateAndClose('/')}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg" 
            onClick={() => navigateAndClose('/products')}
          >
            Products
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg" 
            onClick={() => navigateAndClose('/categories')}
          >
            Categories
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg" 
            onClick={() => navigateAndClose('/about')}
          >
            About
          </Button>

          {/* Theme Toggle */}
          <div className="pt-4 border-t border-border">
            <Button
              variant="ghost"
              className="w-full justify-start text-lg gap-3"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ml-0.5" />
              <span className="ml-6">Toggle Theme</span>
            </Button>
          </div>

          {/* Profile Actions */}
          <div className="pt-2 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg gap-3"
              onClick={() => navigateAndClose('/login')}
            >
              <UserCircle className="h-5 w-5" />
              Sign In
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg gap-3"
              onClick={() => navigateAndClose('/signup')}
            >
              <User className="h-5 w-5" />
              Sign Up
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg gap-3"
              onClick={() => navigateAndClose('/profile')}
            >
              <UserCircle className="h-5 w-5" />
              Profile
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg gap-3"
              onClick={() => navigateAndClose('/settings')}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};