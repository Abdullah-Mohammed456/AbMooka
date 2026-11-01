import { Button } from "@/components/ui/Button";
import { SignInButton, UserButton, Show } from "@clerk/nextjs";
import React from "react";

function Home() {
  return (
    <div>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>

      <Button variant="secondary">Click Me</Button>
    </div>
  );
}

export default Home;
