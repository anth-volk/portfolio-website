import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing — Anthony Volk',
  description: 'Blog posts about full-stack development and policy technology.',
};

export default function WritingPage() {
  return (
    <>
      <h2 className="section-title">Writing</h2>
      <p className="section-sub">Blog &amp; Products</p>
      <p className="writing-note">
        Coming soon &mdash; blog posts about full-stack development and policy technology,
        plus open-source tools that make policy accessible.
      </p>
    </>
  );
}
