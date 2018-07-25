import getExpensesTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('should correctly add up a signle expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(expenses[0].amount);
});

test('should correctly add up a multiple expense', () => {
    const total_expected = expenses.map((expense) => expense.amount).reduce((a, b) => a + b, 0);
    const total = getExpensesTotal(expenses);
    expect(total).toBe(total_expected);
});