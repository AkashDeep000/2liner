export default async (req, res) => {
  const time = JSON.stringify(new Date());
  res.status(200).json({data : time})
          }