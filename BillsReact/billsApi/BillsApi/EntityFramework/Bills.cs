namespace BillsApi.DAL
{
    /// <summary>
    /// Bills table
    /// </summary>
    public class Bills
    {
        //unique ID
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Amount { get; set; }
    }
}