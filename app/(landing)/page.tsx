import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'

const LandingPage = () => {
  return (
    <div>
      Unprotected
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;

