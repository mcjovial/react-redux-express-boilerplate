exports.getTestimonial = (req, res) => {
    const testimonial = [
      {id: 1, client: 'John Wick', body: "What a nice development process you've got bro"},
      {id: 2, client: 'Micheal Falana', body: 'I love your work, your codes are neatly done'},
      {id: 3, client: 'Mary Jane', body: 'What could i have done without you, Nice one dear'},
    ];
  
    res.json(testimonial);
};
