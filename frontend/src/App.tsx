import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { DashboardLayout } from './layout/dashboard-layout';
import { FormLayout } from './layout/form-layout';
import { FormBuilder } from './pages/dashboard/form/builder';

function App() {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <div>hello world</div>,
		},
		{
			path: '/dashboard',
			element: <DashboardLayout />,
			children: [
				{
					path: '',
					element: <Dashboard />,
					index: true,
				},
				{
					path: 'settings',
					element: <div>settings</div>,
				},
				{
					path: 'forms',
					element: <FormLayout />,
					children: [
						{
							path: 'builder/:formId',
							element: <FormBuilder />,
						},
						{
							path: 'responses/:formId',
							element: <div>responses</div>,
						},
					],
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
