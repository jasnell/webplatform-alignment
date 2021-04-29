import { setTimeout } from 'timers/promises';

import { performance, PerformanceObserver } from 'perf_hooks';

console.log('Now', performance.now());

const ob = new PerformanceObserver((entries) => {
  for (const entry of entries.getEntriesByType('mark'))
    console.log(`${entry.entryType} ${entry.name} (${entry.detail}) - ${entry.duration}`);

    for (const entry of entries.getEntriesByType('measure'))
    console.log(`${entry.entryType} ${entry.name} - ${entry.duration}`);
});

ob.observe({ entryTypes: ['mark', 'measure'] });

async function foo() {
  performance.mark('A', { detail: 'foo' });
  await setTimeout(1000);
  performance.mark('B');
  performance.measure('A to B', 'A', 'B');

  console.log('Now', performance.now());
}

foo();
