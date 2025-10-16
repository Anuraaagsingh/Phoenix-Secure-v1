import CardStack from '../CardStack'

const testimonialCards = [
  {
    id: '1',
    content: (
      <div>
        <p className="text-lg mb-4 text-foreground">
          "My car was rescued without Police intervention within 20 minutes at 2.30 in the morning. Thanks to Phoenix Secure's Instant theft Alerts."
        </p>
        <div>
          <p className="font-semibold text-foreground">Mr. Amit Chauhan</p>
          <p className="text-sm text-muted-foreground">Personal Car Owner, Noida</p>
        </div>
      </div>
    ),
  },
  {
    id: '2',
    content: (
      <div>
        <p className="text-lg mb-4 text-foreground">
          "Phoenix GPS has helped cut our Diesel bill by almost 20% and even our efficiency has increased because we know exact location of our fleet."
        </p>
        <div>
          <p className="font-semibold text-foreground">Mr. Satendra Chauhan</p>
          <p className="text-sm text-muted-foreground">Fleet Owner, Gurgaon</p>
        </div>
      </div>
    ),
  },
  {
    id: '3',
    content: (
      <div>
        <p className="text-lg mb-4 text-foreground">
          "Now I am not afraid to park my car anywhere because I get SMS alerts on my phone."
        </p>
        <div>
          <p className="font-semibold text-foreground">Mr. Sunil Mittal</p>
          <p className="text-sm text-muted-foreground">Personal Car Owner, East Delhi</p>
        </div>
      </div>
    ),
  },
];

export default function CardStackExample() {
  return (
    <div className="p-8">
      <CardStack cards={testimonialCards} />
    </div>
  )
}
