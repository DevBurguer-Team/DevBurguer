import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51T6XBOQMlsoRq29XqDqSgDszT6Rz8MAm5KXf5Y6Ry1nqPcMp5WA1X6ucITnY7Fjql8hwkmMJQMCa3bLpyBBiw8xd00dUxBzYVs',
);

export default stripePromise;
