import {
  FeatureInfoCard,
  FeatureNotionCard,
  FeatureProfileCard,
  FeatureStats2Card,
  FeatureStatsCard,
} from './features-cards'

/**
 * @function FeaturesList
 * @description A component that renders a list of features.
 * @exports FeaturesList
 */
export const FeaturesList: React.FC = () => {
  return (
    <div className="lg:gap-auto my-20 flex w-full items-center gap-14 md:flex-col lg:flex-row lg:items-start">
      <div className="flex flex-row items-center justify-center gap-14 lg:items-start">
        <FeatureProfileCard />
        <FeatureInfoCard className="lg:m-auto lg:mt-16" />
      </div>
      <div className="m-auto flex flex-row items-center justify-center gap-14 lg:flex-col lg:items-start">
        <FeatureNotionCard />
        <FeatureStatsCard className="lg:ml-14" />
      </div>
      <FeatureStats2Card className="lg:-mr-[8rem]" />
    </div>
  )
}
