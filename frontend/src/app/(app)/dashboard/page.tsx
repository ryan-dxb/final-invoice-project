import React, { Suspense } from "react";
import { NextPage } from "next";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChartHero } from "@/components/dashboard/charts/Barchart";
import DonutChartExample from "@/components/dashboard/charts/DonutChart";
import DemoDataTable from "@/components/tables/DemoDataTable";

interface DashboardPageProps {
  // Add your prop types here
}

const DashboardPage: NextPage<DashboardPageProps> = () => {
  return (
    <div className="flex flex-col h-full pb-4">
      <DashboardPageHeader
        title="Dashboard"
        subtitle="Here's what's happening in your business today."
      />

      <div className="overflow-y-scroll py-4 max-w-7xl mx-auto w-11/12 scrollbar-none">
        <div className="">
          <div className="grid grid-cols-3 grid-rows-1 gap-8">
            <div className="col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Overview</CardTitle>
                  <CardDescription>
                    A quick overview of how your profile is performing.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className=" h-[300px] ">
                    <BarChartHero />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Invoice & Payments</CardTitle>
                  <CardDescription>
                    Some statistics about your invoices and payments.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className=" h-[300px] ">
                    <DonutChartExample />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>
                A list of recent payments made by your customers.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Suspense fallback={<div>Loading...</div>}>
                <DemoDataTable />
              </Suspense>
            </CardContent>
          </Card>
        </div>

        {/* <DemoDataTable /> */}
      </div>
    </div>
  );
};

export default DashboardPage;
