'use client';

import NumberFlow from '@number-flow/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const plans = [
  {
    id: 'hobby',
    name: 'Hobby',
    price: {
      monthly: 'Free forever',
      yearly: 'Free forever',
    },
    description:
      'Perfect for trying Draw Code AI — draw simple designs and turn them into code instantly.',
    credits: {
      monthly: 5,
    },
    features: [
      '5 AI generations / month',
      'Draw or upload up to 3 designs',
      'Generate basic HTML & CSS',
      'Community support',
      'Public project saves only',
    ],
    cta: 'Start for free',
  },
  {
    id: 'basic',
    name: 'Basic',
    price: {
      monthly: 12,
      yearly: 9,
    },
    description:
      'Best for indie developers who want faster AI generation and cleaner React code.',
    credits: {
      monthly: 200,
    },
    features: [
      '200 AI generations / month',
      'Unlimited design uploads',
      'Generate React + Tailwind code',
      'Auto layout & color detection',
      'Private project saves',
      'Email support',
    ],
    cta: 'Upgrade to Basic',
  },
  {
    id: 'recommended',
    name: 'Recommended',
    price: {
      monthly: 24,
      yearly: 19,
    },
    description:
      'For freelancers and small teams needing unlimited AI design-to-code generation.',
    credits: {
      monthly: 'Unlimited',
    },
    features: [
      'Unlimited AI generations',
      'Export to React, Next.js, Tailwind & Vue',
      'Smart code optimization',
      'Priority AI performance',
      'Premium support',
    ],
    cta: 'Go Recommended',
    popular: true,
  },
];

const PricingComponent = () => {
  const [frequency, setFrequency] = useState<string>('monthly');

  return (
    <div className="not-prose @container flex flex-col gap-16 px-8 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <Tabs defaultValue={frequency} onValueChange={setFrequency}>
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              Yearly
              <Badge variant="secondary">20% off</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mt-8 grid w-full max-w-4xl @2xl:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <Card
              className={cn(
                'relative w-full text-left',
                plan.popular && 'ring-2 ring-primary',
              )}
              key={plan.id}
            >
              {plan.popular && (
                <Badge className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 rounded-full">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-medium text-xl">
                  {plan.name}
                </CardTitle>
                <CardDescription>
                  <p>{plan.description}</p>
                  {typeof plan.price[frequency as keyof typeof plan.price] ===
                  'number' ? (
                    <NumberFlow
                      className="font-medium text-foreground"
                      format={{
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0,
                      }}
                      suffix={`/month, billed ${frequency}.`}
                      value={
                        plan.price[
                          frequency as keyof typeof plan.price
                        ] as number
                      }
                    />
                  ) : (
                    <span className="font-medium text-foreground">
                      {plan.price[frequency as keyof typeof plan.price]}.
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                {plan.features.map((feature, index) => (
                  <div
                    className="flex gap-2 text-muted-foreground text-sm"
                    key={index}
                  >
                    <BadgeCheck className="h-[1lh] w-4 flex-none" />
                    {feature}
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'secondary'}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
