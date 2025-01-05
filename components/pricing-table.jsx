import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PricingTable() {
  const features = [
    { name: "User Accounts", basic: true, pro: true, enterprise: true },
    { name: "Automated Invoicing", basic: true, pro: true, enterprise: true },
    { name: "Expense Tracking", basic: true, pro: true, enterprise: true },
    {
      name: "Basic Financial Reporting",
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Advanced Financial Analytics",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "AI-Powered Financial Forecasting",
      basic: false,
      pro: true,
      enterprise: true,
    },
    { name: "Workflow Automation", basic: false, pro: true, enterprise: true },
    {
      name: "Third-Party Software Integration",
      basic: false,
      pro: true,
      enterprise: true,
    },
    { name: "Custom Integrations", basic: false, pro: true, enterprise: true },
    {
      name: "Project & Task Management",
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Business Analytics & Insights",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "Real-Time AI Insights",
      basic: false,
      pro: true,
      enterprise: true,
    },
  ];

  return (
    <div className="w-full p-6 text-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Compare Our Plans</h2>
          <p className="text-slate-400">
            Our plans are designed to cater to a variety of requirements,
            whether you&apos;re starting or looking for comprehensive solutions.
          </p>
        </div>

        <Table className="border-collapse border-spacing-0">
          <TableHeader>
            <TableRow className="border-b border-[#0073FF] text-[#fff] py-10">
              <TableHead className="text-left text-[#fff]">Features</TableHead>
              <TableHead className="text-center">
                <div className="font-bold text-[#fff]">Basic</div>
                <div className="text-[#fff]">$29/month</div>
              </TableHead>
              <TableHead className="text-center">
                <div className="font-bold text-[#fff]">Pro</div>
                <div className="text-[#fff]">$150/month</div>
              </TableHead>
              <TableHead className="text-center">
                <div className="font-bold text-[#fff]">Enterprise</div>
                <div className="text-[#fff]">Custom</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-[#0073FF] py-10">
              <TableCell>User Accounts</TableCell>
              <TableCell className="text-center">Up to 5 users</TableCell>
              <TableCell className="text-center">Up to 20 users</TableCell>
              <TableCell className="text-center">Unlimited</TableCell>
            </TableRow>
            {features.map((feature) => (
              <TableRow
                key={feature.name}
                className="border-b border-[#0073FF]"
                style={{
                  marginBottom: "20px", // Adds spacing below each row
                  // padding: "60px 0", // Adds vertical padding for more spacing
                }}
              >
                <TableCell className="py-10">{feature.name}</TableCell>{" "}
                {/* Adds vertical padding */}
                <TableCell className="text-center py-4">
                  {feature.basic ? (
                    <Check className="h-4 w-4 text-[#0073FF] mx-auto" />
                  ) : (
                    <X className="h-4 w-4 text-slate-600 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center py-4">
                  {feature.pro ? (
                    <Check className="h-4 w-4 text-[#0073FF] mx-auto" />
                  ) : (
                    <X className="h-4 w-4 text-slate-600 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center py-4">
                  {feature.enterprise ? (
                    <Check className="h-4 w-4 text-[#0073FF] mx-auto" />
                  ) : (
                    <X className="h-4 w-4 text-slate-600 mx-auto" />
                  )}
                </TableCell>
              </TableRow>
            ))}

            <TableRow className="border-b border-slate-800">
              <TableCell>Support</TableCell>
              <TableCell className="text-center">Email</TableCell>
              <TableCell className="text-center">Phone</TableCell>
              <TableCell className="text-center">Priority</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
