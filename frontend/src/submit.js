import { useStore } from './store';
import axios from 'axios';

const BACKEND_URL = 'https://vectorshift-pipelines-api.onrender.com'; 

export const SubmitButton = () => {
    const { nodes, edges } = useStore();

    const handleSubmit = async () => {
        try {
            console.log('Submitting pipeline:', { nodes, edges });
            const response = await axios.post(`${BACKEND_URL}/pipelines/parse`, {
                nodes: nodes,
                edges: edges
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            console.log('Response:', response.data);
            const { num_nodes, num_edges, is_dag } = response.data;
            
            alert(`Pipeline analysis:
                Number of nodes: ${num_nodes}
                Number of edges: ${num_edges}
                Is a DAG: ${is_dag ? 'Yes' : 'No'}`);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
            alert('An error occurred while submitting the pipeline. Check the console for more details.');
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}