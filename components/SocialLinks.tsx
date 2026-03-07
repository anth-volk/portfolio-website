import { IconGitHub, IconLinkedIn, IconEmail } from './Icons';

export default function SocialLinks() {
  return (
    <>
      <a href="https://github.com/anth-volk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        {IconGitHub}
      </a>
      <a href="https://linkedin.com/in/anthonyvolk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        {IconLinkedIn}
      </a>
      <a href="mailto:anth.volk@gmail.com" aria-label="Email">
        {IconEmail}
      </a>
    </>
  );
}
