import Image from 'next/image'

import { Heading } from '~/components/ui/heading'
import { Button } from '../ui/button'

/**
 * @function FeatureProductivity
 * @description A feature that shows the productivity feature.
 * @exports FeatureProductivity
 */
export const FeatureProductivity: React.FC = () => {
  // --- Render
  return (
    <div className="mx-32 my-24 flex items-center gap-20">
      <div className="mt-20 flex w-1/2 flex-col items-start justify-center gap-5 p-4">
        <Heading variant="h3" as="h3" className="lg:text-5xl">
          Know your productivity <br /> by squaree
        </Heading>
        <span className="text-neutral-500">
          The expectation that productivity should always lead to <br />
          tangible results or accomplishments.
        </span>
      </div>
      <div className="relative flex flex-col items-start justify-start">
        <div className="my-8 w-96 rounded-3xl border border-neutral-200 bg-gradient-to-br from-[#FFFFFF] to-[#F1F1F1] p-8">
          <div className="flex items-center justify-start gap-2">
            <Image src="/logo/bubble.svg" width={30} height={30} alt="Bubble" />
            <Heading variant="h3" as="h3">
              Bubble
            </Heading>
          </div>
          <div className="mt-10 flex items-center justify-start gap-3">
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-lg text-neutral-800 dark:text-neutral-200">
                Employees
              </p>
              <span className="text-sm text-neutral-500">1200+</span>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-lg text-neutral-800 dark:text-neutral-200">
                Growth
              </p>
              <span className="text-sm text-neutral-500">Reviewed</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-start gap-1">
            <p className="text-lg text-neutral-800 dark:text-neutral-200">
              Productivity by squaree
            </p>
            <span className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
              70%
            </span>
          </div>
        </div>
        <div className="absolute -bottom-16 left-56 flex w-max items-start justify-start gap-3 rounded-3xl border border-neutral-300 bg-gradient-to-br from-[#FFFFFF] to-[#F1F1F1] px-6 py-8">
          <Image
            src="/images/features/girl.svg"
            width={94}
            height={94}
            alt="Girl"
            className="rounded-3xl border border-neutral-800"
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex w-full items-start justify-start gap-12">
              <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                Moana <br /> John
              </p>
              <Button
                variant="default"
                className="rounded-full px-5 font-bold tracking-widest"
              >
                PROFILE
              </Button>
            </div>
            <span className="text-neutral-800 dark:text-neutral-200">
              moana_j@mail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
