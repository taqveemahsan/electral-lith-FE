import Button from "./Ui/Button";

const JobCard = ({ title, location, department, link = "#" }) => {
    return (
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="space-y-1">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="text-brown-400">
                    {location} — {department}
                </p>
            </div>
            <Button variant="secondary">Download</Button>
        </div>
    );
};

export default JobCard;
