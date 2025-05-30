import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';


<p>Looking for the best <a href="https://kmsontario.ca/"><strong>packers and movers in Canada</strong></a>, especially in Cobourg, Napanee, or Belleville? Choose a trusted moving company that offers reliable, affordable, and professional moving services tailored to your needs. Whether you're relocating locally or long-distance, experienced movers ensure your belongings are packed, transported, and delivered safely and on time. Enjoy a stress-free move with services that include residential moving, office relocation, and secure storage solutions. With a commitment to customer satisfaction and care, these top-rated movers make every move smooth and efficient. Book your move today and experience why they&rsquo;re the preferred movers in Cobourg, Napanee, and Belleville!</p>
<p></p>
<p><strong>Tags:</strong> best movers in Canada, <a href="https://kmsontario.ca/packers-and-movers-in-cobourg.php"><strong>Cobourg movers</strong></a>, <a href="https://kmsontario.ca/packer-and-mover-in-napanee.php"><strong>Napanee movers</strong></a>, <a href="https://kmsontario.ca/packer-and-mover-in-belleville.php"><strong>Belleville movers</strong></a>,&nbsp;</p>
<p><strong>Tags:</strong> best movers in Canada, <a href="https://kmsontario.ca/packers-and-movers-in-cobourg.php"><strong>Cobourg movers</strong></a>, <a href="https://kmsontario.ca/packer-and-mover-in-napanee.php"><strong>Napanee movers</strong></a>, <a href="https://kmsontario.ca/packer-and-mover-in-belleville.php"><strong>Belleville movers</strong></a>,&nbsp;</p>

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">Packers and Movers in Canada</h1>
                <p className="mb-6 text-lg">Get started with kmsontario and Netlify in seconds.</p>
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="btn btn-lg sm:min-w-64">
                    Read the Docs
                </Link>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}
