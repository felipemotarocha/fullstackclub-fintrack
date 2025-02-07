import { ChevronDownIcon, LogOutIcon } from 'lucide-react'

import logo from '@/assets/images/logo.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuthContext } from '@/contexts/auth'

import { Button } from './ui/button'
import { Card } from './ui/card'

const Header = () => {
  const { user, signOut } = useAuthContext()
  return (
    <Card className="flex items-center justify-between px-8 py-4">
      <img src={logo} />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Card className="flex items-center gap-3 px-4 py-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {user.firstName} {user.lastName}
            <ChevronDownIcon />
          </Card>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button
              onClick={signOut}
              className="w-full justify-start"
              variant="ghost"
              size="small"
            >
              <LogOutIcon />
              Sair
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  )
}

export default Header
