import { Header } from "@/components/Header";
import {
  DashboardSsnM25Section,
  InputPclSsnM25Section,
  InputPmlSsnM25Section,
} from "@/components/social-statistics/SsnM25Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function SocialStatistics() {
  const [isSsnM25Visible, setIsSsnM25Visible] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Fungsi Statistik Sosial</h1>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold mb-6">
                Monitoring Susenas Maret 2025
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSsnM25Visible(!isSsnM25Visible)}
                className="ml-2 rounded-full hover:bg-gray-100"
              >
                {isSsnM25Visible ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>

            {isSsnM25Visible && (
              <Tabs defaultValue="dashboardSsnM25" className="space-y-6">
                <TabsList className="w-full border-b border-gray-200 space-x-8 p-0 h-auto bg-transparent">
                  <TabsTrigger
                    value="dashboardSsnM25"
                    className="px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent font-medium"
                  >
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger
                    value="inputPclSsnM25"
                    className="px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent font-medium"
                  >
                    PCL Input
                  </TabsTrigger>
                  <TabsTrigger
                    value="inputPmlSsnM25"
                    className="px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent font-medium"
                  >
                    PML Input
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="dashboardSsnM25">
                  <DashboardSsnM25Section />
                </TabsContent>
                <TabsContent value="inputPclSsnM25">
                  <InputPclSsnM25Section />
                </TabsContent>
                <TabsContent value="inputPmlSsnM25">
                  <InputPmlSsnM25Section />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
