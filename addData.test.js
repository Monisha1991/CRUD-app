// Import the addData function
import addData from './addData.js';

// Describe the addData function
describe('addData', () => {
  // Test case 1: Test the functionality of addData
  test('should add data to info array', async () => {
    // Create a mock info array
    const info = [];

    // Mock inquirer's prompt function
    jest.spyOn(inquirer, 'prompt').mockResolvedValueOnce({
      name: 'John Doe',
      phone: 1234567890,
      age: 'Adult',
    });

    // Call the addData function
    await addData(info);

    // Assert that the info array has been updated
    expect(info.length).toBe(1);
    expect(info[0].name).toBe('John Doe');
    expect(info[0].phone).toBe(1234567890);
    expect(info[0].age).toBe('Adult');
  });

  // Test case 2: Test error handling in addData
  test('should handle errors gracefully', async () => {
    // Mock inquirer's prompt function to throw an error
    jest.spyOn(inquirer, 'prompt').mockRejectedValueOnce(new Error('Mock error'));

    // Call the addData function
    await addData([]);

    // Assert that the error has been logged
    expect(console.error).toHaveBeenCalledWith('Something happened: ', expect.any(Error));
  });
});