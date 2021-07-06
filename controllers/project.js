exports.getProjects = (req, res) => {
    const projects = [
      {id: 1, client: 'John Wick', title: 'Hospital Management system'},
      {id: 2, client: 'Micheal Falana', title: 'School Management system'},
      {id: 3, client: 'Mary Jane', title: 'Hotel Management system'},
    ];
  
    res.json(projects);
};
