import LoaderCounter from '../LoaderCounter'

export default function LoaderCounterExample() {
  return <LoaderCounter onComplete={() => console.log('Loader complete')} duration={3000} />
}
