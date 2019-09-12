# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(username: 'Charlie', email: 'cbeach@fakemail.com')
Course.create!(name: 'Software Engineering', description: 'Learn all the ins and outs of frontend, backend, and fullstack development', user_id: 1)
Course.create!(name: 'User Experience', description: 'Learn how to improve user experience when use appilcations', user_id: 1)
Assignment.create!(name: 'Unit 4 Project', description: 'Build a fullstack app using React and Rails', due_date: '09/18/2019', course_id: 1)

User.create!(username: 'Henry', email: 'hstein@fakemail.com')
Course.create!(name: 'Career Building in Software Engineering', description: 'Learn what you need to do land a job in the software engineering industry from basic professional mannerisms to your portfolio', user_id: 2)
Assignment.create!(name: 'Portfolio', description: 'Create a portolio showcasing some of your best projects', due_date: '10/4/2019', course_id: 2)
Assignment.create!(name: 'Interview Prep', description: 'Prepare yourself for your upcoming mock interview', due_date: '10/10/2019', course_id: 2)