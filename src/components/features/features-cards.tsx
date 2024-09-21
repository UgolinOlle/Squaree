import Image from 'next/image'
import Link from 'next/link'

import { cn } from '~/lib/utils'
import { Button } from '../ui/button'
import { Calendar } from 'lucide-react'

/**
 * @function FeatureProfileCard
 * @description A card that displays a feature profile.
 * @exports FeatureProfileCard
 */
export const FeatureProfileCard: React.FC<{ className?: string }> = ({
  className,
}) => {
  // --- Render
  return (
    <div
      className={cn(
        className,
        `relative h-72 w-72 rounded-xl bg-[url('/images/features/profile.svg')] bg-cover bg-center p-4`
      )}
    >
      <Link
        href="#"
        passHref
        className="absolute left-8 top-8 cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-neutral-200 dark:bg-neutral-100 dark:text-neutral-800"
      >
        PROFILE
      </Link>
    </div>
  )
}

/**
 * @function FeatureInfoCard
 * @description A card that displays a feature info.
 * @exports FeatureInfoCard
 */
export const FeatureInfoCard: React.FC<{ className?: string }> = ({
  className,
}) => {
  // --- Render
  return (
    <div
      className={cn(
        className,
        `relative flex h-96 w-96 flex-col items-start justify-center gap-4 rounded-xl bg-purple-light px-6`
      )}
    >
      <Button
        variant="default"
        className="absolute right-5 top-5 rounded-full px-5 py-2"
      >
        <Calendar size={20} />
      </Button>

      <div className="mt-8 flex w-full items-start justify-start gap-5">
        <Image
          src="/images/features/profile-2.svg"
          alt="info"
          width={100}
          height={100}
        />
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Moana <br /> John
          </span>
          <span className="text-neutral-600 dark:text-neutral-300">
            5mins ago
          </span>
        </div>
      </div>

      <div className="w-full border border-neutral-400" />

      <div className="flex h-auto w-full items-center justify-start gap-5 rounded-2xl bg-neutral-900 p-2">
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-green-light">
          <span className="text-sm text-neutral-600">Feb</span>
          <span className="text-3xl font-extrabold text-neutral-800">28</span>
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-2xl font-bold text-neutral-100">
            Review sync
          </span>
          <span className="text-sm text-neutral-500">12:00 - 01:30 PM</span>
        </div>
      </div>

      <div className="flex h-auto w-full items-center justify-start gap-5 rounded-2xl bg-neutral-900 p-2">
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-purple-light">
          <span className="text-sm text-neutral-600">Mar</span>
          <span className="text-3xl font-extrabold text-neutral-800">02</span>
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-2xl font-bold text-neutral-100">Marketing</span>
          <span className="text-sm text-neutral-500">02:00 - 02:30 PM</span>
        </div>
      </div>
    </div>
  )
}

/**
 * @function FeatureNotionCard
 * @description A card that displays a feature notion.
 * @exports FeatureNotionCard
 */
export const FeatureNotionCard: React.FC<{ className?: string }> = ({
  className,
}) => {
  // --- Render
  return (
    <div
      className={cn(
        className,
        `flex w-96 items-center justify-start gap-5 rounded-[20px] bg-dark-primary p-5`
      )}
    >
      <div className="flex items-center justify-center rounded-[21px] bg-gray-light p-4">
        <Image
          src="/images/features/notion.svg"
          alt="notion"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <span className="text-2xl font-bold text-neutral-100">
          Clear roadmap
        </span>
        <span className="cursor-pointer text-sm text-neutral-500">
          notion.com
        </span>
      </div>
    </div>
  )
}

/**
 * @function FeatureStatsCard
 * @description A card that displays a feature stats.
 * @exports FeatureStatsCard
 */
export const FeatureStatsCard: React.FC<{ className?: string }> = ({
  className,
}) => {
  // --- Render
  return (
    <div
      className={cn(
        className,
        `flex h-72 w-72 flex-col items-start justify-between rounded-2xl bg-green-light p-8`
      )}
    >
      <div className="flex w-full items-start justify-between">
        <span className="text-5xl font-bold text-neutral-900">72k</span>
        <Link
          href="#"
          passHref
          className="rounded-full bg-neutral-900 px-5 py-1 text-sm text-neutral-100"
        >
          VALUE
        </Link>
      </div>
      <div className="relative h-20 w-full">
        <Image
          src="/images/features/stats.svg"
          alt="stats"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="text-2xl text-neutral-900">Product title</span>
        <span className="text-sm text-neutral-500">
          Short description goes here
        </span>
      </div>
    </div>
  )
}

/**
 * @function FeatureStats2Card
 * @description A card that displays a feature stats.
 * @exports FeatureStats2Card
 */
export const FeatureStats2Card: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        `flex h-[430px] w-[400px] flex-col items-start justify-between overflow-hidden rounded-2xl bg-brown-light p-8`
      )}
    >
      <div className="flex w-full items-start justify-between">
        <Link
          href="#"
          passHref
          className="rounded-full bg-brown-medium px-5 py-2 text-sm text-neutral-100"
        >
          VALUE
        </Link>
        <Link
          href="#"
          passHref
          className="rounded-full bg-neutral-900 px-5 py-2 text-sm text-neutral-100"
        >
          DASHBOARD
        </Link>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-2">
        <Image
          src="/images/features/stats-2.svg"
          alt="stats"
          width={220}
          height={220}
          className="absolute -top-16 left-5 z-10 lg:-left-1 lg:-top-16"
        />
        <div className="relative z-20 flex flex-col items-center justify-center gap-2">
          <span className="text-5xl font-bold text-neutral-900">$5476</span>
          <span className="text-sm text-neutral-500">Spending This Week</span>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <span className="text-xl text-neutral-900">Work force</span>
        <span className="text-sm text-neutral-900">
          Short description goes here
        </span>
      </div>
    </div>
  )
}
