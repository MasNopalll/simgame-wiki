import { Accordion } from 'flowbite-react';

export default function AccordionCom(): JSX.Element {
    return (
<Accordion>
  <Accordion.Panel>
    <Accordion.Title>
    How can I increase my population in Utopia?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nulla nunc. Suspendisse eu ullamcorper ex. Duis ullamcorper sem et posuere placerat.
        Sed lobortis ligula ut diam feugiat, eget facilisis lectus suscipit.
        </p>
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        <p>
          Check out this guide to learn how to 
        </p>
        <a
          className="text-cyan-600 hover:underline dark:text-cyan-500"
          href="https://flowbite.com/docs/getting-started/introduction/"
        >
          <p>
            get started
          </p>
        </a>
        <p>
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    What is the best way to grow my kingdom in Utopia?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
          has a design equivalent in our Figma file.
        </p>
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        <p>
          Check out the
        </p>
        <a
          className="text-cyan-600 hover:underline dark:text-cyan-500"
          href="https://flowbite.com/figma/"
        >
          <p>
            Figma design system
          </p>
        </a>
        <p>
          based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      How do I manage my resources effectively for growth in Utopia?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas
          Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
          technical reason stopping you from using the best of two worlds.
        </p>
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
      <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
        <li>
          <a
            className="text-cyan-600 hover:underline dark:text-cyan-500"
            href="https://flowbite.com/pro/"
          >
            <p>
              Flowbite Pro
            </p>
          </a>
        </li>
        <li>
          <a
            className="text-cyan-600 hover:underline dark:text-cyan-500"
            href="https://tailwindui.com/"
            rel="nofollow"
          >
            <p>
              Tailwind UI
            </p>
          </a>
        </li>
      </ul>
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
    );
}